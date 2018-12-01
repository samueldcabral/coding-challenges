// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a string. 
// For example:
// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"

const domainName = (url) => {
  //your code here
  return url.includes('www') ? url.split('www.')[1].split('.')[0] : url.includes('http') ? url.split('//')[1].split('.')[0] : url.split('.')[0]
}