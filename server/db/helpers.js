const { model } = require('./index.js');

// * // * // * //
/*
HELPER FUNCTIONS - CREATE
*/
// * // * // * //

//A helper function which creates a new ProjectLink after receiving a valid GitHub
//link, and returns the ID of the new row entry.

module.exports.newProjLink = (gitLink) => {
  return new Promise((resolve, reject) => {
    model.ProjectLink.create({link: gitLink})
  .then(({ dataValues }) => {
    //Entry data is returned as follows:
    /*
    EX.

    ProjectLink {
      dataValues: {
      id: 1,
      link: 'https://github.com/ChrisBoyd1123/Portfolio-Site.git',
      updatedAt: 2021-08-02T18:02:28.740Z,
      createdAt: 2021-08-02T18:02:28.740Z
    }
    */
    resolve(dataValues.id);
  })
  })
}

//A helper function which creates a new ProjectDescription after receiving a
//string description, and returns the ID of the new row entry.

module.exports.newProjDesc = (desc) => {
  return new Promise((resolve, reject) => {
    model.ProjectDescription.create({description: desc})
  .then(({ dataValues }) => {
    resolve(dataValues.id);
  })
  })
}

//A helper function which creates a new Project after receiving an object
//containing a Project name, description, and link (all of which are strings).
// - Should use the ProjectLink and ProjectDescription creation helper functions.
// - Should return an object representing the new Project row entry
//(including generated ID, inputted name, linkId, and descId).

module.exports.newProj = ({ name, description, link}) => {
  return new Promise((resolve, reject) => {
    module.exports.newProjLink(link)
    .then((linkId) => {
      module.exports.newProjDesc(description)
      .then((descId) => {
        model.Project.create({
          Name: name,
          ProjectLinkId: linkId,
          ProjectDescriptionId: descId
        })
        .then(({ dataValues }) => {
          resolve(dataValues);
        })
        .catch((err) => {
          reject(err);
        })
      })
      .catch((err) => {
        reject(err);
      })
    })
    .catch((err) => {
      reject(err);
    })
  })
}

//A helper function which creates a new TechSkill entry after receiving a
//string with the skill's name and a string specifying the skill's type.
// - Should return an object representing the new TechSkill row entry
//(including generated ID and inputted skill).

module.exports.newTechSkill = (skillDesc, skillType) => {

  return new Promise((resolve, reject) => {
    let skillModel;
    if(skillType === 'language'){
      skillModel  = model.TechLanguageSkills;
    }else if(skillType === 'frontend'){
      skillModel = model.TechFrontendSkills;
    }else if(skillType === 'backend'){
      skillModel = model.TechBackendSkills;
    }else if(skillType === 'database'){
      skillModel = model.TechDatabaseSkills;
    }else if(skillType === 'CICD'){
      skillModel = model.TechCICDSkills;
    }else if(skillType === 'misc'){
      skillModel = model.TechMiscAndLibrarySkills;
    }else{
      reject('No valid skill type given.');
    }

    skillModel.create({
      skill: skillDesc
    }).then(({dataValues}) => {
      resolve(dataValues);
    })
  })
}

// * // * // * //

//A helper function which creates a new ComicLink after receiving a valid Imgur
//tag, and returns the ID of the new row entry.

module.exports.newComicLink = (imgTag) => {
  return new Promise((resolve, reject) => {
    model.ComicLink.create({tag: imgTag})
  .then(({ dataValues }) => {
    resolve(dataValues.id);
  })
  })
}

//A helper function which creates a new ComicDescription after receiving a
//string description, and returns the ID of the new row entry.

module.exports.newComicDesc = (desc) => {
  return new Promise((resolve, reject) => {
    model.ComicDescription.create({description: desc})
  .then(({ dataValues }) => {
    resolve(dataValues.id);
  })
  })
}

//A helper function which creates a new Comic after receiving an object
//containing a Comic name, description, and link (all of which are strings).
// - Should use the ComicLink and ComicDescription creation helper functions.
// - Should return an object representing the new Comic row entry
//(including generated ID, inputted name, linkId, and descId).

module.exports.newComic = ({ name, description, tag}) => {
  return new Promise((resolve, reject) => {
    module.exports.newComicLink(tag)
    .then((tagId) => {
      module.exports.newComicDesc(description)
      .then((descId) => {
        model.Comic.create({
          Name: name,
          ComicLinkId: tagId,
          ComicDescriptionId: descId
        })
        .then(({ dataValues }) => {
          resolve(dataValues);
        })
        .catch((err) => {
          reject(err);
        })
      })
      .catch((err) => {
        reject(err);
      })
    })
    .catch((err) => {
      reject(err);
    })
  })
}

//A helper function which creates a new GalleryImage entry after receiving a
//string with the image's Imgur link.
// - Should return an object representing the new GalleryImage row entry
//(including generated ID and inputted artLink).

module.exports.newGalleryImg = (imgLink) => {
  return new Promise((resolve, reject) => {
    model.GalleryImage.create({artLink: imgLink})
  .then(({ dataValues }) => {
    resolve(dataValues);
  })
  })
}

// * // * // * //
/*
HELPER FUNCTIONS - SELECT
*/
// * // * // * //

//A helper function that finds all TechSkill entries,
//and returns an object of arrays containing each entry's skillDesc.

// Array order should be: languages, frontends, backends, database, CICD, misc/library.

module.exports.searchAllTechSkills = () => {
  return new Promise ((resolve, reject) => {
    let skills = {};

    model.TechLanguageSkills.findAll()
    .then((dataArr) => {
      let languages = [];
      dataArr.forEach(({dataValues}, dataIndex) => {
        languages.push(dataValues.skill);
      })
      skills.languages = languages;
    })
    .then(() => {
      model.TechFrontendSkills.findAll()
      .then((dataArr) => {
        let frontends = [];
        dataArr.forEach(({dataValues}, dataIndex) => {
          frontends.push(dataValues.skill);
       })
        skills.frontends = frontends;
      })
      .then(() => {
        model.TechBackendSkills.findAll()
      .then((dataArr) => {
        let backends = [];
        dataArr.forEach(({dataValues}, dataIndex) => {
          backends.push(dataValues.skill);
       })
        skills.backends = backends;
      })
      .then(() => {
        model.TechDatabaseSkills.findAll()
      .then((dataArr) => {
        let databases = [];
        dataArr.forEach(({dataValues}, dataIndex) => {
          databases.push(dataValues.skill);
       })
        skills.databases = databases;
      })
      .then(() => {
        model.TechCICDSkills.findAll()
      .then((dataArr) => {
        let CICDs = [];
        dataArr.forEach(({dataValues}, dataIndex) => {
          CICDs.push(dataValues.skill);
       })
        skills.CICDs = CICDs;
            })
            .then(() => {

              model.TechMiscAndLibrarySkills.findAll()
              .then((dataArr) => {
                let misc = [];
                  dataArr.forEach(({dataValues}, dataIndex) => {
                  misc.push(dataValues.skill);
                  })
                skills.misc = misc;
                resolve(skills);
              })

            })
          })
        })
      })
    })

  })
}

//A helper function that finds all GalleryImage entries,
//and returns an array of objects containing each entry's data.
//(Including ID and imgLink).

module.exports.searchAllGalleryImages = () => {
  return new Promise ((resolve, reject) => {
    model.GalleryImage.findAll()
    .then((dataArr) => {
      let Images = [];
      dataArr.forEach((dataEntry, dataIndex) => {
        if(dataEntry.dataValues){
          Images.push({
            id: dataEntry.dataValues.id,
            artLink: dataEntry.dataValues.artLink
          });
          if(dataIndex === dataArr.length - 1){
            resolve(Images);
          }
        }else{
          return;
        }
      })
      reject('ERROR: No images retrieved from database.');
    })
  })
}

// * // * // * //

//A helper function that takes in an ID, and then searches
//for the matching ProjectLink entry.
//Returns the link value of the found ProjectLink entry.

module.exports.searchOneProjLink = (projLinkId) => {
  return new Promise ((resolve, reject) => {
    model.ProjectLink.findOne({ where: {
      id: projLinkId
    }})
    .then(({dataValues}) => {
      //When using findOne(), data is returned in the following
      //object format:
      /*
      {
      dataValues: {
        id: 1,
        link: 'https://github.com/ChrisBoyd1123/Portfolio-Site.git',
        createdAt: 2021-08-02T21:27:59.000Z,
        updatedAt: 2021-08-02T21:27:59.000Z
        }
      }
      */
      resolve(dataValues.link);
    })
  })
}

//A helper function that takes in an ID, and then searches
//for the matching ProjectDescription entry.
//Returns the description value of the found ProjectDescription entry.

module.exports.searchOneProjDesc = (projDescId) => {
  return new Promise ((resolve, reject) => {
    model.ProjectDescription.findOne({ where: {
      id: projDescId
    }})
    .then(({dataValues}) => {
      resolve(dataValues.description);
    })
  })
}

//A helper function that finds each Project entry, and returns
//an array of objects that include each Project entry's:
// - Name,
// - Associated link value (using the ProjectLink search helper function),
// - Associated description value (using the ProjectDescription
// search helper function)

module.exports.searchAllProj = () => {
  return new Promise ((resolve, reject) => {
    //When using findAll(), data is returned in the following
    //format of an array of objects:
    /*
    data = [
    {
    dataValues: {
      id: 1,
      link: 'https://github.com/ChrisBoyd1123/Portfolio-Site.git',
      createdAt: 2021-08-02T21:27:59.000Z,
      updatedAt: 2021-08-02T21:27:59.000Z
    },
    {
    dataValues: {
      id: 2,
      link: 'https://github.com/ChrisBoyd1123/Portfolio-Site.git',
      createdAt: 2021-08-02T21:28:12.000Z,
      updatedAt: 2021-08-02T21:28:12.000Z
    }
      ]
    */

      let Projects = [];
      model.Project.findAll()
      .then((dataArr) => {
        dataArr.forEach(({ dataValues }, dataIndex) => {
          module.exports.searchOneProjLink(dataValues.ProjectLinkId)
          .then((projLink) => {
            module.exports.searchOneProjDesc(dataValues.ProjectDescriptionId)
            .then((projDesc) => {
              Projects.push({
                name: dataValues.Name,
                link: projLink,
                desc: projDesc
              })
            })
            .then(() => {
              if(dataIndex === dataArr.length - 1){
                resolve(Projects);
              }
            })
          })
        })
        if(dataArr.length === 0){
          reject('ERROR: No projects retrieved from database.');
        }
      })
  })
}

// * // * // * //

//A helper function that takes in an ID, and then searches
//for the matching ComicLink entry.
//Returns the tag value of the found ComicLink entry.

module.exports.searchOneComicLink = (comicLinkId) => {
  return new Promise ((resolve, reject) => {
    model.ComicLink.findOne({ where: {
      id: comicLinkId
    }})
    .then(({dataValues}) => {
      resolve(dataValues.tag);
    })
  })
}

//A helper function that takes in an ID, and then searches
//for the matching ComicDescription entry.
//Returns the description value of the found ComicDescription entry.

module.exports.searchOneComicDesc = (comicDescId) => {
  return new Promise ((resolve, reject) => {
    model.ComicDescription.findOne({ where: {
      id: comicDescId
    }})
    .then(({dataValues}) => {
      resolve(dataValues.description);
    })
  })
}

//A helper function that finds each Comic entry, and returns
//an array of objects that include each Comic entry's:
// - Name,
// - Associated link value (using the ComicLink search helper function),
// - Associated description value (using the ComicDescription
// search helper function)

module.exports.searchAllComic = () => {
  return new Promise ((resolve, reject) => {
    
    let Comics = [];

      model.Comic.findAll()
      .then((dataArr) => {
        dataArr.forEach(({dataValues}, dataIndex) => {
          module.exports.searchOneComicLink(dataValues.ComicLinkId)
          .then((comicLink) => {
            module.exports.searchOneComicDesc(dataValues.ComicDescriptionId)
            .then((comicDesc) => {
              Comics.push({
                name: dataValues.Name,
                link: comicLink,
                desc: comicDesc
              })
            })
            .then(() => {
              if(dataIndex === dataArr.length - 1){
                resolve(Comics);
              }
            })
          })
        })
        if(dataArr.length === 0){
          reject('ERROR: No comics retrieved from database.');
        }
      })

  })
}