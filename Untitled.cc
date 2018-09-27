//use g++ to compile your program

// This is a comment "two dishes"

/*
multi-line comment
*/

//allows cout, cin
#include <iostream>
#include <vector>
#include <string>
#include <fstream> //file I/O

//allows you to not use std:: before cout
using namespace std;

//cout outputs text
//endl tells you that you want to output the text
int main() {
  cout << "Hello World" <<  endl; //this will output "Hello World" to our screen
  const double PI = 3.1419265235; //const can't be changed, double is accurate up to 15 places
  char myGrade = 'A';
  myAge = 15;
  bool isHappy = true; // T is 1; F is 0
  float favNum = 3.141; //accurate up to six numbers
  cout << "Favourite Number" << favNum << endl;  //This is print out a string called 'Favourite Number' and takes the value of favNum

 //find number of bytes; dataOf indicates date type
  cout << "Size of int" << sizeof(myAge) <<endl;

  int largestInt = 2147483647; //if we go one up [i.e change the last 7 to an 8]
  cout << "largest int" << largestInt << endl;

  //arimethics include +,-,*, /, %, ++, --

  int five = 5;
  cout << "5++ = " << five++ <<endl; //5 --> performs action after it gets the current value
  cout <<"++5 = " << ++five <<endl; //7 --> had a value of 6 from above; increases first before it prints out the current value
  cout <<"5-- =" << five-- <<endl; //7  --> after; current: 6
  cout <<"--5 = " << --five <<endl;  //5

  int a += 6; //or a = a + 1

  //know BEDMAS [order of operations]

  //casting data types
  //(float) changes the int to a decimal value

  cout << "4 / 5 = " <<  4 / 5 << endl;
  cout << "4 / 5 = " << (float) 4 / 5 << endl;

//comparison operators: ==, !=, >=, <=
//logical operators: && ll !

if ( conditions ) {
  cout << "You can't drive!" << endl;
}
else if ( conditions ) {
  cout <<
}
else {

}

//switch statements

int  greetingOption = 2;

// a switch statement is similiar the an if-else statements but we uses cases instead
// case 1 indicates if the value is 1, then the condition is true and it will perform the block of code under it
// we need a break statement for each cases
// default is like an "else" statement

case 1:
  cout << "bonjour" << endl;
  break;

case 2:
  cout << "Hola" << endl;
  break;

default:
  cout << "Hello" << endl;

variable = (condition) ? true : false
int largestNum = (5 > 2) ? 5 : 2

// for arrays, you need to declare the types of 
int favNums[5];
int badNums[5];


// execution went perfectly
  return 0
}
