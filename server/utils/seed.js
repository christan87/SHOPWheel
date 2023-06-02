const chalk = require('chalk');
const bcrypt = require('bcryptjs');

const setupDB = require('./db');
const  { ROLES } = require('../constants');
const User = require('../models/user');

const seedDB = async () => {
    try {
        const user = new User({
            email: 'admin@shopwheel.com',
            password: 'test123',
            firstName: 'admin',
            lastName: 'admin',
            role: ROLES.Admin
        });

        const existingUser = await User.findOne({ email: user.email });
        console.log(`existingUser: ${existingUser}`);
        if(existingUser) throw new Error('user collection has already been seeded.');

        /* Hash / Secure User Password */ 
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;

        await user.save();

        console.log(`${chalk.green('✓')} ${chalk.green('DB has finished seeding!')}`);

    } catch (error) {
        console.log(`${chalk.red('x')} ${chalk.green('Experienced error while seeding database.')}`);
        console.log(error);
        return null;
    }
};

(async () => {
    await setupDB().then(async () => {
        await seedDB();
    });
})();
