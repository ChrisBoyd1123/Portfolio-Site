require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');

const DATABASE_NAME = 'portfoliosite';
const DATABASE_URI = process.env.SQL_URI || null;

const sequelize = DATABASE_URI ?
new Sequelize(DATABASE_URI)
: new Sequelize(DATABASE_NAME, 'root', '', {
  dialect: 'mysql'
});

//A GALLERYIMG table, with rows:
//ART_LINK - the Imgur link to the art piece.

//A COMIC table, with rows:
//NAME - the name of the comic.
//LINK_id - a ForeignKey id to the comic's Imgur link extension.
//DESC_id - a ForeignKey id to the comic's description.

//A COMICLINK table, with rows:
//TAG - the Imgur link extension.

//A COMICDESC table, with rows:
//DESC - a summary description of the comic.

// * // * // * //

//A TECHSKILLS table, with rows:
//SKILL - The name of the development skill.

//A PROJECT table, with rows:
//NAME - the name of the coding project.
//GITLINK - a ForeignKey id to the link for the project's GitHub repository.
//DESCLINK - a ForeignKey id to the project's description.

//A PROJECTLINK table, with rows:
//LINK - an https link to a project's GitHub repository.

//A PROJECTDESC table, with rows:
//DESC - the text description of a coding project.