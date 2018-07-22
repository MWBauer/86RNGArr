var face;
var freq = [, 0, 0, 0, 0, 0, 0]; //left freq 0 out since it's a d6 so 1-6
//summarize results
for (var roll = 1; roll <= 6000; ++roll) {face = Math.floor(1 + Math.random() * 6);
  ++freq[face];}

document.writeln("<table border = \"1\"><thead>");
document.writeln("<th>Face</th>" + "<th>Freq</th></thead><tbody>");

//generate entire table of freq for each face
for (face = 1; face < freq.length; ++face)
  document.writeln("<tr><td>" + face + "</td><td>" + freq[face] + "</td></tr>");
document.writeln("</tbody></table>");