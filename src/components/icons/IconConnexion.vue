<template>
    <svg
  width="25"
  height="33"
  viewBox="0 0 25 33"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <path
    d="M19 8.375C19 11.9649 16.0899 14.875 12.5 14.875C8.91015 14.875 6 11.9649 6 8.375C6 4.78515 8.91015 1.875 12.5 1.875C16.0899 1.875 19 4.78515 19 8.375Z"
    :fill="couleur1"
  ></path>
  <path
    d="M12.5 19.75C6.21776 19.75 1.125 24.8428 1.125 31.125H23.875C23.875 24.8428 18.7822 19.75 12.5 19.75Z"
    :fill="couleur"
  ></path>
  <path
    d="M19 8.375C19 11.9649 16.0899 14.875 12.5 14.875C8.91015 14.875 6 11.9649 6 8.375C6 4.78515 8.91015 1.875 12.5 1.875C16.0899 1.875 19 4.78515 19 8.375Z"
    stroke="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
  <path
    d="M12.5 19.75C6.21776 19.75 1.125 24.8428 1.125 31.125H23.875C23.875 24.8428 18.7822 19.75 12.5 19.75Z"
    stroke="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  ></path>
</svg>
</template>

<script>
export default {
    props: {
        couleur:{
            type: String,
            default:'#000000'
        },
        couleur1:{
            type: String,
            default:'#000000'
        }
    },
}
</script>
