<script>
  import Indexdesign from "../template/indexdesign.svelte";
  import data from "../../../datas/indexdata.json";

  const { resources } = data;

  export { resources };
</script>

<Indexdesign {resources} />
