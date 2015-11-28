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
      var address = this.address
      location.href = address
    }
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
