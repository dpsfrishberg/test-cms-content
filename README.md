# GitBook NCBI Theme

***Pre-alpha state. Do not use!***

## Prerequisites and initial setup

You'll need:

* A unix environment with Node.js version ?FIXME? or later. Also, add the 
  directory "./node_modules/.bin" to your `PATH`.
* A [GitHub](https://github.com) user account,
* A [GitBook](https://gitbook.com) user account that's integrated with 
  GitHub: 
    * When creating the account, choose "login with your GitHub account".
    * After the account is created, go to the [GitHub Authorized
      applications page](https://github.com/settings/applications), and 
      authorize GitBook as needed.


## Starting a new static site

[Create a new GitHub repository](https://github.com/new), under your own
account, to hold the static content. Enter a name and a description.
Do NOT check "Initialize this repository with a README".

On the next screen, click "Import code", and enter 
"https://github.com/Klortho/ncbi-static-template.git". Then click "Begin
import".

> In case you're wondering why we don't recommend using GitHub's "fork"
> feature to start your new repo, there are many reasons. The main reason
> is that you can only have one fork of a given repo on GitHub, whereas
> you might need to manage several static sites.

Create a new GitBook, and wire it up to this GitHub repo.

* From [GitBook.com](https://www.gitbook.com/), click the "New" button
* In the left-hand pane, scroll down until you find the "GitHub" option,
  and click that. Fill in the title and description.
* Click "Select a repository", and you should see a drop-down with a list
  of all of your GitHub repositories. If you don't, then you need to check
  your GitBook / GitHub integration.
* Select the repository you just created, and click "Create book".


What that finishes, various resources become available on GitBook.com to 
help you manage and author your content, at these URLs:

* Book dashboard: https://www.gitbook.com/book/{user}/{repo}/details
* Editor: https://www.gitbook.com/book/{user}/{repo}/edit#/edit/master/README.md
* Updates: https://www.gitbook.com/book/{user}/{repo}/activity

You should also be able to view the published site, with NCBI styling:

* Home page: https://{user}.gitbooks.io/{repo}/content/)
* Child page: https://{user}.gitbooks.io/{repo}/content/{page}.html)



You should be able to do most editing and management operations from the
GitBook site. But, if needed, you can also clone your repo to your local 
machine:

```
git clone git@github.com:{user}/{repo}.git
cd my-site
```

If you have GitBook / GitHub integration set up correctly, then pushing
to GitHub will cause GitBook to rebuild the site.
