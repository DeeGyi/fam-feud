import { Component } from "react";
import { Link } from "react-router-dom";
import "./NewTeamPage.css";

import NewTeamForm from '../../components/NewTeamForm/NewTeamForm';
import NewTeamPost from '../../components/NewTeamPost/NewTeamPost';
import NavHome from '../../components/NavHome/NavHome';

export default class NewTeamPage extends Component {

  state = {
    teams: []
  }


  getTeams = async () => {
    await fetch("/api")
    .then(res => res.json())
    .then(teams => this.setState({ teams }))
  };

  componentDidMount() {
    this.getTeams()
  };

  deleteTeam = (e) => {
    e.preventDefault()
    this.setState({ teams: this.state.teams.filter(team => team !== e.target.value)})
}

  render() {
    return (
      <div className="NewTeam">
        <NavHome />
        <h1 className="NewT">NEW TEAM</h1><hr /><br />
        <NewTeamForm getTeams={this.getTeams} />
        <br /><br />
        <Link className='Play' to='/warfeud/game'>PLAY GAME</Link><br /><br /><hr />
        <h2>TEAM HISTORY</h2><br />
        {this.state.teams.length ?
          this.state.teams.map(t => <NewTeamPost post={t} deleteTeam={this.deleteTeam} /> )
          :
          <h2>No Teams</h2>
        }
      </div>
    )
  }
}






// edit