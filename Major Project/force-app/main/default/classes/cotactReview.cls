public class cotactReview {   
    //get all contacts
    @AuraEnabled
    public static List<Contact> getConList(){
        return[SELECT Id,Name,AccountId,Phone,Email,Title From Contact];        
    }
   
}