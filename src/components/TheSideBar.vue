<template>
  <!-- Navigation
	================================================== -->

  <!-- Responsive Navigation Trigger -->
  <a href="#" class="dashboard-responsive-nav-trigger"
    ><i class="fa fa-reorder"></i> Dashboard Navigation</a
  >

  <div class="dashboard-nav">
    <div class="dashboard-nav-inner">
      <ul data-submenu-title="Main">
        <li class="active">
          <a href="dashboard.html"
            ><i class="sl sl-icon-settings"></i> Dashboard</a
          >
        </li>
        <li>
          <router-link to="/student-list"
            ><i class="sl sl-icon-envelope-open"></i> Student List
            <span class="nav-tag messages">2</span>
          </router-link>
        </li>
        <li>
          <a href="dashboard-bookings.html"
            ><i class="fa fa-calendar-check-o"></i> Bookings</a
          >
        </li>
        <li>
          <a href="dashboard-wallet.html"
            ><i class="sl sl-icon-wallet"></i> Wallet</a
          >
        </li>
      </ul>

      <ul data-submenu-title="Listings">
        <li>
          <a><i class="sl sl-icon-layers"></i> My Listings</a>
          <ul>
            <li>
              <a href="dashboard-my-listings.html"
                >Active <span class="nav-tag green">6</span></a
              >
            </li>
            <li>
              <a href="dashboard-my-listings.html"
                >Pending <span class="nav-tag yellow">1</span></a
              >
            </li>
            <li>
              <a href="dashboard-my-listings.html"
                >Expired <span class="nav-tag red">2</span></a
              >
            </li>
          </ul>
        </li>
        <li>
          <a href="dashboard-reviews.html"
            ><i class="sl sl-icon-star"></i> Reviews</a
          >
        </li>
        <li>
          <a href="dashboard-bookmarks.html"
            ><i class="sl sl-icon-heart"></i> Bookmarks</a
          >
        </li>
        <li>
          <a href="dashboard-add-listing.html"
            ><i class="sl sl-icon-plus"></i> Add Listing</a
          >
        </li>
      </ul>

      <ul data-submenu-title="Account">
        <li>
          <a href="dashboard-my-profile.html"
            ><i class="sl sl-icon-user"></i> My Profile</a
          >
        </li>
        <li>
          <a href="index.html"><i class="sl sl-icon-power"></i> Logout</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Navigation / End -->
</template>

<script>
export default {};
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
