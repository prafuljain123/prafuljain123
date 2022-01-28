function validateform() 
{
    var name=document.getElementById('username').value;
      var password=document.getElementById('password').value;
      var i;
      var nc=-1;//name counter
      var pc=-1;//password counter
      t=["Praful@123","Ajay","Mayank","Preksha"];// array of usernames//
      p=["2003Hello", "1972", "2005","9917311669"];//array of passwords//
      for(i=0;i<4;i++)
      {
          if(name==t[i]){
          nc=i;
          break;}
      }
      for(i=0;i<4;i++)
      {
          if(password==p[i]){
          pc=i;
          break;}
      }
      if(nc==-1){
      alert("No record found for this username");
      return false;
    } if(nc!=pc){
      alert("Password didn't match.");
       return false;
    }
      
      return true;
}