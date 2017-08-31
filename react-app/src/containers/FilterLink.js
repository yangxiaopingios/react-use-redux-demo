import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = function(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}


const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

//UI 组件Link生成容器组件FilterLink
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink