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
const GalleryImage = sequelize.define('GalleryImage', {
  artLink: {
    type: DataTypes.STRING(2000),
    allowNull: false
  }
});

//A COMICLINK table, with rows:
//TAG - the Imgur link extension.

const ComicLink = sequelize.define('ComicLink', {
  tag: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

//A COMICDESC table, with rows:
//DESC - a summary description of the comic.

const ComicDescription = sequelize.define('ComicDescription', {
  description: {
    type: DataTypes.STRING(10000),
    allowNull: false
  }
});

//A COMIC table, with rows:
//NAME - the name of the comic.
//LINK_id - a ForeignKey id to the comic's Imgur link extension.
//DESC_id - a ForeignKey id to the comic's description.
const Comic = sequelize.define('Comic', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Comic.belongsTo(ComicLink);
Comic.belongsTo(ComicDescription);

// * // * // * //

//A TECHSKILLS table, with rows:
//SKILL - The name of the development skill.

const TechLanguageSkills = sequelize.define('TechLanguageSkills', {
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const TechBackendSkills = sequelize.define('TechBackendSkills', {
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const TechFrontendSkills = sequelize.define('TechFrontendSkills', {
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const TechDatabaseSkills = sequelize.define('TechDatabaseSkills', {
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const TechCICDSkills = sequelize.define('TechCICDSkills', {
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const TechMiscAndLibrarySkills = sequelize.define('TechMiscAndLibrarySkills', {
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

//A PROJECTLINK table, with rows:
//LINK - an https link to a project's GitHub repository.

const ProjectLink = sequelize.define('ProjectLink', {
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

//A PROJECTDESC table, with rows:
//DESC - the text description of a coding project.

const ProjectDescription = sequelize.define('ProjectDescription', {
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

//A PROJECT table, with rows:
//NAME - the name of the coding project.
//GITLINK - a ForeignKey id to the link for the project's GitHub repository.
//DESCLINK - a ForeignKey id to the project's description.

const Project = sequelize.define('Project', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})
Project.belongsTo(ProjectLink);
Project.belongsTo(ProjectDescription);

module.exports.db = () => {
  return new Promise((resolve, reject) => {
    sequelize.sync().then(() => {
      resolve();
    })
  })
}
module.exports.model = {
  Project: Project,
  ProjectLink: ProjectLink,
  ProjectDescription: ProjectDescription,
  TechLanguageSkills: TechLanguageSkills,
  TechFrontendSkills: TechFrontendSkills,
  TechBackendSkills: TechBackendSkills,
  TechDatabaseSkills: TechDatabaseSkills,
  TechCICDSkills: TechCICDSkills,
  TechMiscAndLibrarySkills: TechMiscAndLibrarySkills,
  GalleryImage: GalleryImage,
  Comic: Comic,
  ComicLink: ComicLink,
  ComicDescription: ComicDescription
}