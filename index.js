$(document).ready(function(){
    $('#addtaskbtn').click(function(){
        const inputVal=$('#task-input').val().trim();
        if(inputVal){
           const task=$(`
                <li>
                  <span class="task-name">${inputVal}</span>
                  <div class="task-actions">
                     <button class="complete">Mark Complete</button>
                     <button class="delete">Delete</button>
                  </div>
                </li>
             `).hide();

             $('#tasklist').append(task);
             task.fadeIn();
             $('#task-input').val('');
        }else{
            alert('please enter a task.');
        }
    });

    $(document).on('click','.complete',function(){
        $(this).parent().parent().find('.task-name').addClass('completed');
    });

    $(document).on('click','.delete',function(){
        $(this).parent().parent().fadeOut(function(){
            $(this).remove();
        });
    });

    $('#task-filter').change(function(){
        const filter=$(this).val();
        $('#tasklist li').each(function(){
            const isCompleted=$(this).hasClass('completed');
            if(filter === 'all' || (filter === 'completed' && !isCompleted) || (filter === 'pending' && isCompleted)){
                $(this).show();
            }else{
                $(this).hide();
            }
        })
    })
});