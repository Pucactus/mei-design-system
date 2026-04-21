import './Button.css'; // Dòng này cực kỳ quan trọng để nhận diện thiết kế

export function Button({ variant = 'primary', label }) {
    // Lắp ghép tên class dựa trên variant được truyền vào
    const className = `btn btn-${variant}`;

    return (
        <button className={className}>
            {label}
        </button>
    );
}