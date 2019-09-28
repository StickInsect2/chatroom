<script>
export default {
    name:"Content",
    props:{
        containers:{
            type:Array,
            default:function(){
                return[]
            }
        }
    },
    render(){
        return(
            <div>
                {
                    this.containers.map((element,index) => {
                        return <div>{ element.active ? element.$slots.default : ""  }</div>
                    })
                }
            </div>
        )
    }
}
</script>