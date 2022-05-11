import React from 'react';
import Title from './Title';
import missionsInfo from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsInfo.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />))}
      </div>
    );
  }
}
