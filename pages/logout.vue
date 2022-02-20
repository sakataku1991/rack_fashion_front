<script>
export default {
  name: 'PagesLogout',
  middleware ({ redirect }) {
    return redirect('/')
  }
}
</script>
