import React, {Component} from 'react';
// eslint-disable-next-line
import NavBar from '@mulesoft/anypoint-navbar';
import navbarStyles from '@mulesoft/anypoint-navbar/lib/anypoint-navbar.css';
const profile = {id:"e81cc098-a1cc-4250-8618-be29defab8d3",firstName:"Brian",lastName:"Nazareth",email:"brian.nazareth@mulesoft.com",username:"brian-nazareth",properties:{cs_auth:{activeOrganizationId:"cdb7b584-d2ce-464d-b3b6-579d638879bc"}},contributorOfOrganizations:[{name:"Monty Python",id:"cdb7b584-d2ce-464d-b3b6-579d638879bc",parentName:null,isMaster:!0},{name:"30 Rock",id:"23e35877-d1c3-4e8b-856e-b1b87997d25f",parentName:"Monty Python"},{name:"Happy Endings",id:"dfd89ba3-a17a-4c86-8aa1-ad3562c3545b",parentName:"Monty Python"},{name:"Parks and Recreation",id:"c0339128-abcd-4070-9aef-4e2c167a9ac6",parentName:"Monty Python"},{name:"Performance",id:"3b10c01c-39ad-4b7a-b113-bcb7a6e57ccc",parentName:"Monty Python"},{name:"Saturday Night Live",id:"c2c3e96c-b768-4898-9980-eb244126b4cf",parentName:"Monty Python"}],permissions:{cloudhub:{view:!0},api_platform:{view:!0},exchange:{view:!0},messaging:{view:!0},dgw:{view:!1},admin:{view:!1},support:{view:!0},partners:{view:!1},design_center:{view:!0}}};


class Nav extends Component {
  render() {
    return (
      <NavBar
        profile={profile}
        activeOrganizationId={profile.properties.cs_auth.activeOrganizationId}
        onOrganizationChange={onOrganizationChange}
        onSignout={onSignout}
      />
    );
  }
}

function onOrganizationChange(organization) {
  console.log('You changed to organization: ' + organization.name);
}

function onSignout() {
  window.alert('You signed out!');
}

export default Nav;
