<template>
    <div class="container">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Ring Number</th>
                        <th>Age</th>
                        <th>Rank</th>
                        <th>Division</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>       
                    <info-component v-for="info in 12"></info-component>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Info from './RingInfo.vue';

export default {
    components: {
        'info-component': Info
    }
}
</script>
