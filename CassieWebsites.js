Websites = new Mongo.Collection("websites");
Assignments = new Mongo.Collection("assignments")

if (Meteor.isClient) {
  Template.body.helpers({
    websites: function(){
      return Websites.find();
    }
  });

  Template.body.events({
    "click .siteBlocks": function(address){
      var address = this.address;
      location.href = address;
    },

    "click .submit": function(){
     
      var address = websiteAddress.value;
      var name = websiteName.value;

      Websites.insert({name:name, address:address});

      websiteAddress.value = '';
      websiteName.value = '';
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
