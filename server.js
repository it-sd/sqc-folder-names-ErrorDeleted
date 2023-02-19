// Future intent is to make this work with folders over 9 (since sort is inaccoret.)
const newFolderName = function (folders) {
  const sortedFolders = folders.sort()
  let starterFolder = false
  let newFoldersNum = 2
  for (let i = 0; i < folders.length; i++) {
    if (sortedFolders[i] === 'New Folder') { starterFolder = true }
    if (sortedFolders[i] === `New Folder (${newFoldersNum})`) { newFoldersNum += 1 }
  }

  console.log('**********')
  console.log(`User has: ${folders}`)
  console.log(`User folders sorted: ${sortedFolders}`)
  console.log('New folder will be: ')
  if (starterFolder === false) {
    console.log('New Folder')
  } else {
    console.log(`New Folder (${newFoldersNum})`)
  }
  console.log('\n')
}
newFolderName(['New Folder (7)', 'New Folder', 'New Folder (5)', 'New Folder (9)'])
newFolderName(['New Folder', 'New Folder (2)', 'New Folder (7)', 'New Folder (3)', 'New Folder (5)', 'New Folder (4)'])

module.exports = { newFolderName }
