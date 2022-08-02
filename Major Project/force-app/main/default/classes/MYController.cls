public class MYController {
    @AuraEnabled
    /* public static List<Account> showAccountsForAccordion()
{
List<Account> accList = [SELECT Id,Name,Rating,Phone,(SELECT AccountId, FirstName,LastName FROM Contacts LIMIT 1)
FROM  Account  Order By name];
return accList;
}*/
    public static  List<Account> showAccountsForAccordion()
    {
        List<Account> accList = [select Id,Name,Rating,Phone,(select firstname,Name,lastname from contacts LIMIT 1)
                                 FROM
                                 Account];
        return accList;
    }
   
    @AuraEnabled
    public static   List<Contact> allContacts(String aId)
    {
        List<Contact> conList = [SELECT Id, AccountId , FirstName, LastName FROM Contact WHERE AccountId=:aId ];
        return conList;
    }
    
    @AuraEnabled
    public static   List<Account> Accountdetails(String aId)
    {
        List<Account> aList = [SELECT Id, Name FROM Account WHERE Id=:aId];
        return aList;
    }
}
