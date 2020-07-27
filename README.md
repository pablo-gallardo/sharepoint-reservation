# sharepoint-reservation
This is just a simple "web application" that leverages in Sharepoint's "Script Editor" and Sharepount's REST API.
By adding the javascript files to the Team Site assets, then using scipt editor to add the html page,
a basic web form should be available to to use.

The structure is also simple! It uses a calendar and a list for each site that you have. For example, if you have 3 sites, then that would be 3 calendars and 3 lists;
each calendar should be named "[Site] Calendar" and each list "[Site]". Add two columns to your list: "Space", "Table"; and add two columns to your calendar: "ID", "Name".

Add all the spaces and tables accordingly to your lists (this can be easily be done using the Sharepoint PnP module) and you should be good to go.

This reservation app works dinamically, in such that if a space is taked already on the specified date, it will not be listed as an option to the users.

Work flow as follow:

1. Input the desired date
2. Select the desired site
3. Select the desired table
4. Select the desired space
5. Input your name
6. Input your workplace's ID
7. Hit "Submit"

By then the reservation should be already there. A good thing about using Sharepoint lists for this is that it can easily be added to PowerBI to review and make Data Analysis on the site's population for peak days
