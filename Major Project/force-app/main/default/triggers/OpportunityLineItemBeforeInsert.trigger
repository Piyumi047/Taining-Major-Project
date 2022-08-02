trigger OpportunityLineItemBeforeInsert on OpportunityLineItem (before insert) {
    Set<Id>opportunityIds = new Set<Id>();
      // get all parent IDs
      for(OpportunityLineItem i : trigger.new)
      {
          opportunityIds.add(i.OpportunityId);
      }
      // query for related Olis (Opportunity Line Items)
      Map<Id, Opportunity> opps = new Map<Id, Opportunity>([SELECT ID,
                                                            (SELECT ID
                                                             FROM OpportunityLineItems)
                                                            FROM Opportunity
                                                            WHERE ID IN :opportunityIds]);
      for(OpportunityLineItem i : trigger.new)
      {
          if(opps.get(i.OpportunityId).OpportunityLineItems.size()>0)
          {
              i.addError('Your Message'); }
      }
  }