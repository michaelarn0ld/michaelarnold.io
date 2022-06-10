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


export const IssueService = () => {
    window.onload = () => {
        const issueForm = document.getElementById('issue-form')
        console.log(issueForm)
        issueForm.addEventListener('submit', (e) => {
            e.preventDefault()                                         
            console.log("FOO")
        })                                                                 
    }              
}
