<template>

    <section class="rootContent">
        <label class="lbl">Registration Form</label><br>
        <label class="lbl2">College School Year: 2021-2022</label><br>
        <div>

        <form >

            <label style="color:green">ENROLLMENT INFORMATION</label><br>
            <label>Course/Programs</label><br>

            <select name="item2">
            <option value="select1"></option>
            <option value="select1">BSIT</option>
            <option value="select2">BSCS</option>
            <option value="select3">BSTM</option>
            </select><br><br>

            <label style="color:green">STUDENT BASIC INFORMATION</label><br>
            <label>Surname*</label><label style="margin-left:20em">Given Name</label><label style="margin-left:19em">Email</label><br>

            <input type="text"><input type="text" style="margin-left:57px"><input type="text" style="margin-left:57px"><br>
            
            <label>Middle Name</label><label style="margin-left:18.3em">Extension e.g, Jr(if applicable)</label><label style="margin-left:6em">Date of Birth(MM/DD/YYY)</label><br>

            <input type="text"><input type="text" style="margin-left:57px"><input type="date" style="margin-left:57px"><br>

            <label>Complete Address</label><label style="margin-left:40.1em">Contact Number</label>

            <input type="text" style="width:44.8em"><input type="text" style="margin-left:4.7em"><br><br>

            <label style="color:green">LAST SCHOOL INFORMATION</label><br>

            <label>School Last Attended*</label><label style="margin-left:150px">Strand*</label><label style="margin-left:20.7em">School Address*</label><br>

            <input type="text"><input type="text" style="margin-left:57px"><input type="text" style="margin-left:57px"><br><br>

            <label style="color:green">PARENT GUARDIAN INFORMATION</label><br>
            <label>Guardian Name*</label><label style="margin-left:20em">Relationship*</label><label style="margin-left:19em">Contact Number*</label><br>
            <input type="text">

            <select name="item2" style="margin-left:50px">
            <option value="select1"></option>
            <option value="select1">Father</option>
            <option value="select2">Mother</option>
            <option value="select3">MotherFather</option>
            </select>

            <input type="text" style="margin-left: 50px"><br>
            <label>Complete Address*</label><br>
            <input type="text" style="width:69.5em"><br><br>
            <input type="checkbox" id="checkbox">
            <label for="checkbox">Agree</label><br><br>
            <p><img src="/check.png" class="Logo" height="12" width="12"/>      I hereby certify that the information given are true and correct<br><img src="/check.png" class="Logo" height="12" width="12"/>     I allow Colege of St. Catherine Quezon City to use my child's details to create and/or update his/her learners profile in Learners Information System<br><img src="/check.png" class="Logo" height="12" width="12"/>        The information herein shall be treated as confidential in compliance with the Data Privacy Act of 2012</p><br>
            <v-btn width="350px" color="success" to="Registration" class="btnsubmit">SUBMIT</v-btn>
        </form>
        </div>

    </section>
</template>

<script>
import index from './index.vue'
export default {
  components: { index },

}
</script>

<style scoped>
    div{
        font-size: 12px;
        margin-left: 20em;
        font-family:'Courier New';
        
    }
    label{
        height: 1px;
    }
    input,select{
        border: thin solid black;
        width: 20em;
        height: 25px;

    }
    select{
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 0px;
    }
    h4{
        text-align: center;
        margin: 0px 0px 0px 0px; 
        padding: 0px 0px 0px 0px;
        
    }
    h6{
        text-align: center; 
        margin: 0px 0px 0px 0px; 
        padding: 0px 0px 0px 0px;
    }
    .lbl{
        display: flex;
        font-size: 25px;
        justify-content: center;
        align-items: center;
        margin-bottom: 0;
    }
    .lbl2{
        display: flex;
        font-size: 12px;
        justify-content: center;
        align-items: center; 
        margin-top: 0;

    }

    input[type="checkbox"] {
        margin-left:0px;
        height: 20px;
        width: 20px;
        background-color: green;
    }
    input[type=checkbox]:checked + label {
        color:green;
        } 
    
    p{
        margin: 0,0,0,0;
        width: 69.6em;

    }
    .btnsubmit{
        margin-left: 34.5em;
    }



    
</style>