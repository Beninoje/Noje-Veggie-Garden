<h1>Noje's Veggie Garden</h1>

<h2>Overview</h2>

<p>This repository contains the source code for an ASP.NET e-commerce website. The website enables users to perform various actions such as browsing items, adding items to cart, searching for items, updating their cart, and completing transactions using Stripe payment integration. Additionally, administrators have full CRUD (Create, Read, Update, Delete) operations for managing items in the database.</p>

<h2>Features</h2>

<ul>
    <li>User Authentication: Users can sign up, log in, and log out securely.</li>
    <li>Shopping Cart Management: Users can add items to their cart, update quantities, and remove items.</li>
    <li>Search Functionality: Users can search for items using keywords.</li>
    <li>Admin Panel: Administrators have access to an admin panel where they can perform CRUD operations on items in the database.</li>
    <li>Stripe Payment Integration: Secure payment processing for completing transactions.</li>
</ul>

<h2>Technologies Used</h2>

<ul>
    <li>ASP.NET: Framework for building web applications.</li>
    <li>SQL Server: Database management system for storing product and user data.</li>
    <li>HTML/CSS/JS: Frontend development technologies for building user interfaces.</li>
    <li>Stripe API: Payment processing API for handling transactions securely.</li>
</ul>

<h2>Installation</h2>

<ol>
    <li>Clone the repository to your local machine:</li>
    <pre><code>git clone https://github.com/Beninoje/Noje-Veggie-Garden.git</code></pre>
    <li>Set up the database:
        <ul>
            <li>Create a SQL Server database.</li>
            <li>Execute the SQL scripts provided in the <code>database</code> folder to create the necessary tables and populate initial data.</li>
        </ul>
    </li>
    <li>Configure Stripe API:
        <ul>
            <li>Sign up for a Stripe account and obtain API keys.</li>
            <li>Update the Stripe API keys in the appropriate configuration file (<code>web.config</code> or similar).</li>
        </ul>
    </li>
    <li>Build and run the application using Visual Studio or your preferred development environment.</li>
</ol>

<h2>Usage</h2>

<ul>
    <li>As a user:
        <ul>
            <li>Navigate to the website and sign up or log in.</li>
            <li>Browse items, add them to cart, and proceed to checkout.</li>
            <li>Update cart as needed.</li>
        </ul>
    </li>
    <li>As an administrator:
        <ul>
            <li>Access the admin panel and log in.</li>
            <li>Perform CRUD operations on items (Add, Edit, Delete).</li>
        </ul>
    </li>
</ul>

<p>Royalty-Free images from <a href="https://pixabay.com">Pixabay.com</a></p>
