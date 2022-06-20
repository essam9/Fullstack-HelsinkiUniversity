import Part from './Part'
import Header from './Header'
import StatisticLine from './StatisticsLine'

const Statistics = (props) => {
    const good=props.statistics[0];
    const neutral=props.statistics[1];
    const bad=props.statistics[2];

    console.log(good);
    const average=((good*1)+(neutral*0)-(bad*1))/(good+neutral+bad);
    const positive=good*100/(good+neutral+bad);

    if((good+neutral+bad)!==0){

    return( 
<table>
    <tbody>
    <StatisticLine text="good" value ={good} />
    <StatisticLine text="neutral" value ={neutral} />
    <StatisticLine text="bad" value ={bad} />
    <StatisticLine text="average" value ={average} />
    <StatisticLine text="positive" value ={positive+' %'} />
    </tbody>
</table>
    )}
    else{
        return(
            <Part name="No Feedback Given"/>
        )
    }

}
export default Statistics;
