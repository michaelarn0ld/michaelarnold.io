 /* --------------------------------------------------------------------
 * Issue Service submits issues that people notice to a database on RDS
 * ---------------------------------------------------------------------
 *
 * Issue service allows visitors to submit bug fixes to my site as they
 * encounter them. Without these, users would have to be GitHub users to
 * submit an issue on the website repo.
 *
 * -----------------------------------------------------------------
 *
 * ----------------------------------------------------------------- */

const baseUrl = "http://localhost:8080"

const submitIssue = () => {
  const payload = {
    name: document.getElementById("form-name").value,
    email: document.getElementById("form-email").value,
    subject: document.getElementById("form-subject").value,
    body: document.getElementById("form-message").value
  }

  return new Promise(resolve => {
    setTimeout(() => {
      console.log(payload)
      resolve('resolved')
    }, 2000)
  })
}

const succeedWorkflow = () => {
  console.log("success")
}

const failWorkflow = () => {
  console.log("fail")
}

const submit = async (form) => {
  try {
    const bar = await submitIssue()
    form.reset()
    succeedWorkflow()
  } catch (e) {
    failWorkflow()
  }
}

export const IssueService = () => {
  window.onload = () => {
    const issueForm = document.getElementById('issue-form')
    issueForm.addEventListener('submit', (e) => {
      e.preventDefault()                                         
      submit(issueForm)
    })                                                                 
  }              
}
