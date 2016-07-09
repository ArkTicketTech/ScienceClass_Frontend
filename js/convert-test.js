var convertToQuestions = function(testlist) {
  var result_list=[];
  for ( test in testlist) {
    var content = [];
    content.push(test.A);
    content.push(test.B);
    content.push(test.C);
    content.push(test.D);
    result_list.push({
      name: test.title,
      content: content,
      answer: test.answer
    });
  }
  return result_list;
}

module.exports=convertToQuestions;
