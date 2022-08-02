public class DupEmailHndler {
    public static String checkDupEmailInAccount(Map<ID,Account>oldMap, List<Account> newList, boolean IsInsert, boolean IsUpdate){
         Set<String> incomingEmails = new Set<String>();
         Set<String> duplicateEmails = new Set<String>();
    
        try{      
            if(IsInsert){ 
                for(Account a: newList){
                    incomingEmails.add(a.daze_Email__c); // this contains all emails to be sent to DB
                }
            }
            
            //Trigger.oldMap passId ..get object
            if(IsUpdate){                
                for(Account anew: newList){
                        if(oldMap.get(anew.id).daze_Email__c != anew.daze_Email__c){
                            incomingEmails.add(anew.daze_Email__c); 
                        }          
                }
            }
            
            //Find Account Which have already incoimg emails
            List<Account> existingAccounts=[Select id,daze_Email__c from Account where daze_Email__c IN:incomingEmails];
            if(existingAccounts.size()>0){
                for(Account a:existingAccounts){
                    duplicateEmails.add(a.daze_Email__c);
                }
                newList[0].addError('Your Emaill is already in system'+JSON.serialize(duplicateEmails));
            }
                  
        }catch(Exception e){
            System.debug(e.getLineNumber());
        }
        return('');
    }
    
}