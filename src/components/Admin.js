import React from 'react'

export default function Admin() {
  return (
    <div class="container">
    <h2>Property Listing Form</h2>
    <form>
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required/>
        </div>
        <div class="form-group">
            <label for="rate">Rate:</label>
            <input type="number" id="rate" name="rate" required/>
        </div>
        <div class="form-group">
            <label for="distance">Distance (in miles):</label>
            <input type="number" id="distance" name="distance" required/>
        </div>
        <div class="form-group">
            <label for="features">Features:</label>
            <div class="checkbox-group">
                <label for="attachedWashroom">Attached Washroom</label>
                <input type="checkbox" id="attachedWashroom" name="features" value="attachedWashroom"/>
                <label for="studyTable">Study Table</label>
                <input type="checkbox" id="studyTable" name="features" value="studyTable"/>
                <label for="security">Security</label>
                <input type="checkbox" id="security" name="features" value="security"/>
            </div>
        </div>
        <div class="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="mixed">Mixed</option>
            </select>
        </div>
        <div class="form-group">
            <label for="bedType">Bed Type:</label>
            <select id="bedType" name="bedType">
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="triple">Triple</option>
            </select>
        </div>
        <div class="form-group">
            <label for="images">Upload Images:</label>
            <input type="file" id="images" name="images" accept="image/*" multiple />
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
  )
}
