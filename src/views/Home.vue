<template>
  <navbar-vue></navbar-vue>

  <div class="home container mt-5">
    <h1 class="h1">Home</h1>

    <div class="container">
      <div class="card kartu">
        <div class="row">
          <div class="col-md-4">
            <div class="foto">
              <img
                src="./../assets/IMG_8068.jpg"
                class="img-thumbnail"
                alt=""
                width="150"
                height="auto"
              />
            </div>
          </div>
          <div class="col-md-8 kertas-biodata">
            <div class="biodata">
              <table width="100%" border="0">
                <tbody>
                  <tr>
                    <td valign="top">
                      <table
                        border="0"
                        width="100%"
                        style="padding-left: 2px; padding-right: 13px"
                      >
                        <tbody class="body">
                          <tr>
                            <td width="25%" valign="top" class="textt">Name</td>
                            <td width="2%">:</td>
                            <td style="color: #e9a7f9; font-weight: bold">
                              Alfred G Takoi
                            </td>
                          </tr>
                          <tr>
                            <td class="textt">Gender</td>
                            <td>:</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td class="textt">Place of birth</td>
                            <td>:</td>
                            <td>Bandung</td>
                          </tr>
                          <tr>
                            <td class="textt">Date of birth</td>
                            <td>:</td>
                            <td>22-01-2003</td>
                          </tr>
                          <tr>
                            <td class="textt">Address</td>
                            <td>:</td>
                            <td>Jl. Cibogo Permai II No 5 Cimahi</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import NavbarVue from './Navbar.vue';
export default {
  name: "Home",
  components: {
    NavbarVue
  },
  
};
</script>
<style>


.kartu {
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.03);
  transition: all 0.3s;
  background-color: #591869;
  border: solid 8px #ea92ff;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
}
.kartu:hover {
  background-color: #1f8a45;
  border: solid 8px #4fd47e;
  border-top-left-radius: 80px;
  border-bottom-right-radius: 80px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.foto {
  padding: 20px;
  margin-left: 30px;
  margin-top: 5px;
}
.body {
  font-size: 20px;
  font-weight: 300;
  color: white;
}
.biodata {
  margin-top: 20px;
}
</style>
