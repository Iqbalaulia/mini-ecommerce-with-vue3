<!-- @format -->

<template>
	<div>
		<div class="navbar-social-media navbar navbar-light">
			<div class="navbar-brand">
				<a href="" class="navbar-brand__instagram">
					<fa :icon="['fab', 'instagram']" />
				</a>
				<a href="" class="navbar-brand__youtube">
					<fa :icon="['fab', 'youtube']" />
				</a>
				<a href="" class="navbar-brand__facebook">
					<fa :icon="['fab', 'facebook']" />
				</a>
				<a href="" class="navbar-brand__twitter">
					<fa :icon="['fab', 'twitter']" />
				</a>
				<div class="devider"></div>
				<a
        class="download-apps"
					href="https://play.google.com/store/apps/details?id=id.co.superindo.mysuperindo&hl=en_US&pli=1"
					for="">
					<fa :icon="['fas', 'mobile-screen-button']" class="mr-1" /> Download My
					Superindo</a
				>
			</div>

			<div class="form-inline about-us">
        <a href="https://www.superindo.co.id/membership/" target="_blank" class=""> 
          <fa :icon="['fas', 'user-check']" class="mr-1" />
          Membership
        </a>
        <div class="devider"></div>
        <div class="history">
          <a href="">
            <fa :icon="['fas', 'building']" class="mr-1" />
            Sejarah
          </a>
        </div>
      </div>
		</div>
		<nav class="navbar-custom navbar navbar-expand-lg navbar-light">
			<a class="navbar-brand" href="#">
				<img
					src="/docs/4.6/assets/brand/bootstrap-solid.svg"
					width="30"
					height="30"
					alt="" />
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#"
							>Home <span class="sr-only">(current)</span></a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							role="button"
							data-toggle="dropdown"
							aria-expanded="false">
							Dropdown
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="#">Action</a>
							<a class="dropdown-item" href="#">Another action</a>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">Something else here</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link disabled">Disabled</a>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input
						class="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search" />
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit"
						>Search</button
					>
				</form>
			</div>
		</nav>
	</div>
</template>

<script setup></script>
