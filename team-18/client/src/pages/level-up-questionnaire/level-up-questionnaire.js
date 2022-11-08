import React from 'react'
import Video from '../video/video'
import './level-up-questionnaire.css'

class LevelUpQuestionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 'coconut' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="grouping">
        <h3 className="title">Sign-up Questionnaire</h3>
        <Video/>
        <form onSubmit={this.handleSubmit} className="formGroup">
          <label className="inputBox">
            Jump up and down
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Touch toes / stretch
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Spin or dance
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Sprint or run up stairs
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Rock
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Go for a walk
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Flap hands
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Swing
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Ask for a tight hug from a trusted person
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Carry heavy items
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Stomp feet
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Use weighted blanket or hug vest
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Play tug-of-war
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Take deep breaths
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Do chair push-ups
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Squeeze putty, play doh, stress bal
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Squeeze hands
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Use a chewy
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Suck on a straw or water bottle
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Ask for a message from a trusted person
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Stroke preferred fabric/surface
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Tap finger on table/desk/leg
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>

          <label className="inputBox">
            Use koosh ball or textured figure
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="soothing">Soothing</option>
              <option value="neutral">Neutral</option>
              <option value="alerting">Alerting</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default LevelUpQuestionnaire
