<script>
  import RecourseReview from '../landingPages/recourseReview.svelte';
  
  import locationData from '../../../datas/location.json';
  
  const country = locationData.country;
  const state = locationData.state;
  const language = locationData.language;
</script>

<RecourseReview {country} {state} {language} />
