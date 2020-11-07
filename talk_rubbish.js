function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateRubbisTalk(occupation) {
  console.log('This function will generate password')

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let options = {
    engineer: '',
    designer: '',
    entrepreneur: '',
    rubbishTalk: ''
  }
  switch (occupation) {
    case 'engineer':
      options.engineer = 'true'
      options.rubbishTalk = '工程師' + sample(task.engineer) + sample(phrase);
      break;
    case 'designer':
      options.designer = 'true'
      options.rubbishTalk = '設計師' + sample(task.designer) + sample(phrase);
      break;
    case 'entrepreneur':
      options.entrepreneur = 'true'
      options.rubbishTalk = '創業家' + sample(task.entrepreneur) + sample(phrase);
      break;

  }
  //console.log(options.rubbishTalk)
  return options

}

// invoke generatePassword function 
//generateRubbisTalk('engineer')

module.exports = generateRubbisTalk