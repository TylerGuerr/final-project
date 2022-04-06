
    $('#submitButton').on('click', function(){
        $('#output').prepend(
            `<div class="commentContainer">
                <div id="image">
                    <img src="userimg.png">
                    <div id="seperateDisplayName">
                    ${$('#userName').val()}
                </div>
                </div>
                <div id="commentContent">${$('#comment').val()}</div>
                <div id="userNameDisplay">
                    <div>
                        <div id="displayButtons">
                        <button type="button" id="editButton" class="button">Edit</button>
                        <button type="button" id="deleteButton" class="button">Delete</button>
                        </div>
                        <div id="formComment" class="formCommentClass">
                            <input type="text" id="changeComment>
                            <button type="button" id="formSubmit">Submit</button>
                        </div>   
                    </div>
                </div>
            </div>`
        );
    });

    $('#output').on('click', '#deleteButton', function(){
        let parent = $(this).parents()[3];
        $(parent).remove();
    });

    $('#output').on('click', '#editButton', function(){ 
        let parent = $(this).parent()[0];
        let next = $(parent).next();
        let css = $(next).css('display', 'block');
    });

    $('#output').on('click', '#formComment', function(){
        let select = $(this).children()[0];
        let newVar = $(select).val();
        let nav = $(select).parents()[3]
        let nav2 = $(nav).children()[1]
        let goal = $(nav2).text(newVar);
        console.log(goal);
    });

