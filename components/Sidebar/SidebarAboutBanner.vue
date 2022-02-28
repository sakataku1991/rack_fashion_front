<template>
  <section class="SidebarItem SidebarBanner">
    <div class="SidebarBanner__banner">
      <nuxt-link to="/about" class="SidebarBanner__bannerLink bnr" ontouchstart="">
        <picture class="SidebarBanner__bannerLinkPicture">
          <source
            media="(max-width: 767px)"
            :srcset="sp_image_src"
          >
          <source
            media="(min-width: 768px)"
            :srcset="pc_image_src"
          >
          <img
            :src="pc_image_src"
            alt="「RACKのつかいかた」バナー"
            class="SidebarBanner__bannerLinkPictureImg bnr-img"
          >
        </picture>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComponentsSidebarAboutBanner',
  data () {
    return {
      sp_image_src: require('@/assets/image/bnr/bnr_rack_how-to-use_sp.png'),
      pc_image_src: require('@/assets/image/bnr/bnr_rack_how-to-use_pc.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.SidebarBanner {
  @include sp {
  };
  @include pc {
  };
}
.SidebarBanner__banner {
  @include sp {
  };
  @include pc {
  };
}
.SidebarBanner__bannerLink {
  display: block;
  @include sp {
  };
  @include pc {
  };
}
.SidebarBanner__bannerLinkPicture {
  @include sp {
  };
  @include pc {
  };
}
.SidebarBanner__bannerLinkPictureImg {
  @include sp {
    aspect-ratio: 67 / 48;
    border-radius: 8px;
    height: 100%;
    width: 100%;
  };
  @include pc {
    border-radius: 10px;
    height: 280px;
    width: 220px;
  };
}
</style>
