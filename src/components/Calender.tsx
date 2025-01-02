import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Calendar
                locale="ko-KR"
                onChange={onChange}
                value={value}
                minDetail="month"
                maxDetail="month"
                prev2Label={null}
                next2Label={null}
                prevLabel={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7803 3.46967C11.0732 3.76256 11.0732 4.23744 10.7803 4.53033L6.81066 8.5L10.7803 12.4697C11.0732 12.7626 11.0732 13.2374 10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.21967 9.03033C4.92678 8.73744 4.92678 8.26256 5.21967 7.96967L9.71967 3.46967C10.0126 3.17678 10.4874 3.17678 10.7803 3.46967Z" fill="#636363" />
                </svg>
                }
                nextLabel={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21967 3.46967C4.92678 3.76256 4.92678 4.23744 5.21967 4.53033L9.18934 8.5L5.21967 12.4697C4.92678 12.7626 4.92678 13.2374 5.21967 13.5303C5.51256 13.8232 5.98744 13.8232 6.28033 13.5303L10.7803 9.03033C11.0732 8.73744 11.0732 8.26256 10.7803 7.96967L6.28033 3.46967C5.98744 3.17678 5.51256 3.17678 5.21967 3.46967Z" fill="#636363" />
                </svg>
                }
                // 월/년을 분리해 표시
                navigationLabel={({ date }) => {
                    const year = date.getFullYear();
                    const month = date.getMonth() + 1;
                    return (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                {month}월
                            </div>
                            <div style={{ fontSize: '0.8rem', marginTop: '2px' }}>
                                {year}년
                            </div>
                        </div>
                    );
                }}
                showNeighboringMonth={false}
                formatShortWeekday={(_, date) =>
                    ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
                }
                className="customCalendar" // 여기서 .customCalendar에 대한 CSS를 작성
            />
        </div>
    );
}

export default CustomCalendar;
