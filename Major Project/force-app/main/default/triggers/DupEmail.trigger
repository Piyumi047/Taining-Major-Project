trigger DupEmail on Account (before insert, before Update){
    DupEmailHndler.checkDupEmailInAccount(Trigger.oldMap,Trigger.new,Trigger.isInsert,Trigger.isUpdate);
    
}
