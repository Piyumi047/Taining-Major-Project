public class daze_Major_Assignment {
    
    //get the account list
    @Auraenabled
    public static PageWrapper fetchAccList(Decimal pageNumber){
        Integer pageSize = 5;
        Integer offset=((Integer)pageNumber- 1)*pageSize;
        
        //create instance of wrapper class
        PageWrapper obj= new PageWrapper();
        
        //set the variable values
        obj.pageSize=pageSize;
        obj.pno=(Integer)pageNumber;
        obj.total=[select count() FROM Account];
        obj.pages=(obj.total/obj.pageSize);
        obj.allRecords=[select Id,Name,daze_Email__c,daze_Total_Payment_Recived__c,daze_Last_Paymet_Recived_Date__c,daze_Due__c From Account order by CreatedDate DESC LIMIT 5 OFFSET:offset];
        
        //return the wrapper class instance
        return obj;
        
        
        
    }
    
    //create a wrapper class
    public class PageWrapper{
        @Auraenabled 
        public Integer pageSize{get;set;}
        @Auraenabled 
        public Integer pno{get;set;}
        @Auraenabled 
        public Integer pages{get;set;}
        @Auraenabled 
        public Integer total{get;set;}
        @Auraenabled 
        public List<Account> allRecords{get;set;}
        @Auraenabled 
        public List<daze_Payment__c> allPayments{get;set;}
    }   
    
    //Create or update account
    @AuraEnabled
     public static void createAcc(String name,String email,Integer amounte){
           Account accObj = new Account();
           accObj.Name = name;
           accObj.daze_Email__c = email;
           accObj.daze_Amount_Entitled__c = amounte;
           upsert accObj;      
    }
    
    //get requested account details
    @AuraEnabled
    public static List<Account> getAccount(String Id){
        String accId=Id;
        String Query = 'SELECT Id,Name,daze_Amount_Entitled__c,daze_Due__c,daze_Total_Payment_Recived__c,daze_Email__c,LastModifiedDate From Account WHERE Id=: accId';
        List<Account> sObjectList = Database.query(Query);
        //System.debug(' #### sObjectList '+sObjectList);
        return sObjectList;
    }
    
    //get requested account payment details
    @Auraenabled
    //public static paymentPageWrapper fetchPayRecord(Integer pageNumber,String field,String Id,Integer recordsize){
    public static PageWrapper fetchPayRecord(Integer pageNumber,String Id,String field){
        Integer pageSize = 2;
       // Integer rsize = recordsize;
        Integer offset=(pageNumber- 1)*pageSize;
        String Searchfield= field;
        
        //create instance of wrapper class
       PageWrapper obj= new PageWrapper();
        
        //set the variable values
        //obj.pageSize=pageSize;
         obj.pno=pageNumber;
        //obj.total=[select count() FROM daze_Payment__c];
        //obj.pages=(obj.total/obj.pageSize);
        
        if(Searchfield=='To_Account'){
         obj.allPayments=[select 
                         Name,
                         daze_Amount__c,
                         daze_To_Account__c
                         From daze_Payment__c Where daze_From_AccountId__c=:Id LIMIT 2 OFFSET:offset];
        }
        if(Searchfield=='From_Account'){
            obj.allPayments=[select 
                         Name,
                         daze_Amount__c,
                         daze_From_Account__c
                         From daze_Payment__c Where daze_To_AccountId__c=:Id LIMIT 2 OFFSET:offset];
        }
        //return the wrapper class instance*/
        return obj;
    }
    
    @Auraenabled
    public static PageWrapper fetchPayment(Integer pageNumber){
        Integer pageSize = 5;
        Integer offset=(pageNumber- 1)*pageSize;
        
        //create instance of wrapper class
       PageWrapper obj= new PageWrapper();
        
        //set the variable values
        obj.pageSize=pageSize;
        obj.pno=pageNumber;
        obj.total=[select count() FROM daze_Payment__c];
        obj.pages=(obj.total/obj.pageSize);
        obj.allPayments=[select 
                         Name,
                         daze_From_Account__c,
                         daze_From_AccountId__c,
                         daze_To_Account__c,
                         daze_To_AccountId__c,
                         daze_Amount__c,
                         daze_Date__c
                         From daze_Payment__c order by CreatedDate DESC LIMIT 5 OFFSET:offset];
        
        //return the wrapper class instance
        return obj;
    }
   
    //create payment 
   @AuraEnabled
   public static void savePaymentMethod(String faccName,String faccId,String taccName,String taccId,Decimal amount,Date D){
       daze_Payment__c payObj = new daze_Payment__c();
        
       payObj.daze_From_Account__c = faccName;
       payObj.daze_From_AccountId__c = faccId;
       payObj.daze_To_Account__c = taccName;
       payObj.daze_To_AccountId__c = taccId;
       payObj.daze_Amount__c= amount;
       payObj.daze_Date__c=D;
        
       insert payObj;
    }
    
    //get account list for customlookup
    @AuraEnabled
    public static List<sObject> getRecordList(String sreachText){
        String searchKey = '%' + sreachText + '%';
        String Query = 'SELECT Id,Name From Account WHERE Name LIKE : searchKey';
        List<sObject> sObjectList = Database.query(Query);
        System.debug(' #### sObjectList '+sObjectList);
        return sObjectList;
    }
    
    /*@AuraEnabled
    public static List<Account> getToAccountAE(String TId){
        String Query = 'SELECT daze_Amount_Entitled__c From Account WHERE Id=:TId LIMIT 1';
        List<Account> amountEntitled =Database.query(Query);        
        System.debug(' #### sObjectList '+ amountEntitled);
        return amountEntitled;
    }*/
    
    public class PaymentWrapper{
        
        @Auraenabled 
        public List<Account> ae{get;set;}
        @Auraenabled 
        public List<daze_Payment__c> paydetails{get;set;}
    }   
    
    //get requested payemt details
    @AuraEnabled
    public static PaymentWrapper payment(String Id){
        
        PaymentWrapper obj= new PaymentWrapper();
        //String searchKey = '%' + sreachText + '%';
        String accId=Id;
       // String Query ='SELECT Name,daze_From_Account_Name__c,daze_To_Account_Name__c,daze_From_AccountId__c,daze_To_AccountId__c,daze_Amount__c From daze_Payment__c WHERE Id=: accId';
        obj.paydetails=[SELECT Name,daze_From_Account__c,daze_To_Account__c,daze_From_AccountId__c,daze_To_AccountId__c,daze_Amount__c From daze_Payment__c WHERE Id=: accId];
         // Database.query(Query);
        String tId=obj.paydetails[0].daze_To_AccountId__c;
        obj.ae=[select daze_Amount_Entitled__c from Account where Id=:tId];
        
        //System.debug(' #### sObjectList '+ sObjectList);
        return obj;
    }
    
    
}
