var convertToQuestions = function(testlist) {
  console.log(testlist);
  var result_list=[];
  testlist.forEach(function(t){
    var test = JSON.parse(t);
    var content = [];
    content.push(test.A);
    content.push(test.B);
    content.push(test.C);
    content.push(test.D);
    result_list.push({
      name: test.content,
      content: content,
      answer: test.answer
    });
  });

  return result_list;
}

module.exports=convertToQuestions;
