/*
  - A node-script that generates clothes data

  NOTE:
  1. this must be run from the root directory - use the npm command 'image-data'
*/

const fs = require('fs')
const path = require('path')

// paths
const appSrc = path.resolve(process.cwd(), 'src')
const sourceDir = path.join(appSrc, 'assets/images/clothes')
const outputDir = path.join(appSrc, 'js/view-data')
const outputFileName = 'clothes-data.js'
const outputFilePath = path.join(outputDir, outputFileName)

runTask()

async function runTask () {
  let fileNames

  try {
    fileNames = await readImageFiles()

    await checkAndRemoveOutputFile()
    await writeOutputFile(fileNames)
  } catch (err) {
    console.error(`error occurred! : `, err)

    return;
  }

  console.log('file successfully generated at:\n', outputFilePath)
}

function readImageFiles () {
  return new Promise((resolve, reject) => {
    fs.readdir(sourceDir, (err, files) => {
      if (err) {
        reject(err)

        return;
      }

      resolve(files)
    })
  })
}

function checkAndRemoveOutputFile () {
  // check if there is a previously generated output file and
  // delete it if it's there.
  const { constants } = fs

  return new Promise ((resolve, reject) => {
    fs.access(outputFilePath, constants.F_OK, (err) => {
      // err === truthy -> does not exist
      if (err) {
        resolve(true)

        return;
      }

      fs.unlink(
        outputFilePath,
        (err) => {
          if (err) reject(err)
          else resolve(true)
        }
      )
    })
  })
}

function writeOutputFile (imageFileList) {
  // write clothes-data.js file using the passed image list
  const outputStream = fs.createWriteStream(outputFilePath)
  const dataList = []

  return new Promise((resolve) => {
    imageFileList.forEach(filename => {
      const nameWithoutExt = filename.split('.')[0]
      const [ productName, ...info ] = nameWithoutExt.split('_')
  
      dataList.push({
        nameCode: nameWithoutExt,
        name: productName,
        info
      })
      outputStream.write(
        `import ${productName} from "@images/clothes/${filename}";\n`
      )
    })

    outputStream.write('\nconst clothesData = [')

    dataList.forEach(({ 
      name, info, nameCode
    }, index) => {
      const [sleeve, lightDark, gender] = info

      outputStream.write(
        `{
          productIndex: ${index},
          id: "${nameCode}_${index}",
          imgPath: ${name},
          name: "${name}",
          sleeve: "${sleeve}",
          lightDark: "${lightDark}",
          gender: "${gender}",
          price: 45.00,
          totalPurchaseCount: ${Math.floor(5 + Math.random() * 145)},
          rate: ${(3.5 + Math.random() * 1.5).toFixed(2)}
        },\n`
      )
    })

    outputStream.write(']\n\n')
    outputStream.write('export default clothesData;\n')

    outputStream.end()
    resolve(true)
  })
}