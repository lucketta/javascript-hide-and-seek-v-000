var getFirstSelector = selector => {
  return document.querySelector(selector)
}

var nestedTarget = () => {
  return document.querySelector('#nested .target')
}

var deepestChild = () => {
  return document.querySelector('#grand-node div div div div')
}

var increaseRankBy = n => {
  const rankedLists = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}
