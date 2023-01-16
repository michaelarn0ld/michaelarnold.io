const baseUrl = "https://www.zettels.io:8443"

const submitWorkout = async () => {

  const workout = {
    weightLbs: Number(document.getElementById("form-weight").value),
    bodyFatPercentage: Number(document.getElementById("form-fat").value),
    exerciseType: document.getElementById("form-exercise").value,
    repRange: document.getElementById("form-reps").value,
    maximumWeightAchieved: Number(document.getElementById("form-max").value)
  }

  const accessPin = document.getElementById("form-access").value
  
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(workout)
  }

  const response = await fetch(`${baseUrl}/exerciseDataPoint?accessPin=${accessPin}`, payload)
  if (response.status === 201) {
    return response
  }
  return Promise.reject(`Request failed with status: ${response.status}`)
  
}

const succeedWorkflow = () => {
  console.log("success")
}

const failWorkflow = () => {
  console.log("fail")
}

const submit = async (form) => {
  try {
    const response = await submitWorkout()
    form.reset()
    succeedWorkflow()
  } catch (e) {
    console.log(e)
    failWorkflow()
  }
}

export const HealthService = () => {
  window.onload = () => {
    const workoutForm = document.getElementById('workout-form')
    workoutForm.addEventListener('submit', (e) => {
      e.preventDefault()                                         
      submit(workoutForm)
    })                                                                 
  }              
}
