select email
from Person 
GROUP BY email
having count(email) >=2