<template>
  <!-- Header Container
================================================== -->
  <header id="header-container" class="fixed fullwidth dashboard">
    <!-- Header -->
    <div id="header" class="not-sticky">
      <div class="container">
        <!-- Left Side Content -->
        <div class="left-side">
          <!-- Logo -->
          <div id="logo">
            <a href="index.html"><img src="images/logo-00.png" alt="" /></a>
            <a href="index.html" class="dashboard-logo">
              <img src="images/logo-00.png" alt="" />
            </a>
          </div>

          <!-- Mobile Navigation -->
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <!-- Main Navigation -->
          <nav id="navigation" class="style-1">
            <ul id="responsive">
            </ul>
          </nav>
          <div class="clearfix"></div>
          <!-- Main Navigation / End -->
        </div>
        <!-- Left Side Content / End -->

        <!-- Right Side Content / End -->
        <div class="right-side">
          <!-- Header Widget -->
          <div class="header-widget">
            <!-- User Menu -->
            <div class="user-menu">
              <div class="user-name">
                <span><img src="images/dashboard-avatar.jpg" alt="" /></span>My
                Account
              </div>
              <ul>
                <li>
                  <a href="dashboard.html"
                    ><i class="sl sl-icon-settings"></i> Dashboard</a
                  >
                </li>
                <li>
                  <a href="dashboard-messages.html"
                    ><i class="sl sl-icon-envelope-open"></i> Messages</a
                  >
                </li>
                <li>
                  <a href="dashboard-bookings.html"
                    ><i class="fa fa-calendar-check-o"></i> Bookings</a
                  >
                </li>
                <li>
                  <a href="index.html"
                    ><i class="sl sl-icon-power"></i> Logout</a
                  >
                </li>
              </ul>
            </div>

            <a href="dashboard-add-listing.html" class="button border with-icon"
              >Add Listing <i class="sl sl-icon-plus"></i
            ></a>
          </div>
          <!-- Header Widget / End -->
        </div>
        <!-- Right Side Content / End -->
      </div>
    </div>
    <!-- Header / End -->
  </header>
  <div class="clearfix"></div>
  <!-- Header Container / End -->
</template>

<script>
export default {
  setup(){
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
